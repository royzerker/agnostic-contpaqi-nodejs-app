import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { ElementType, ReactNode } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'

interface TextFieldProps<T extends FieldValues> {
	id?: string
	control: Control<T>
	name: Path<T>
	label?: string
	type?: 'text' | 'password' | 'email' | 'number'
	placeholder?: string
	description?: string
	className?: string
	hiddenMessage?: boolean
	classNames?: {
		label?: string
		field?: string
		description?: string
		message?: string
	}
	as?: ElementType
	icon?: ReactNode
}

export const TextField = <T extends FieldValues>({
	id,
	control,
	hiddenMessage,
	name,
	classNames,
	className,
	as: Field = Input,
	label,
	placeholder,
	description,
	type = 'text',
	icon
}: TextFieldProps<T>) => {
	if (Field !== Input && Field !== 'input' && Field !== Textarea && Field !== 'textarea') {
		throw new Error('Field must be Input or textarea')
	}
	const isInput = Field === Input || Field === 'input'

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn('w-full', className)}>
					{!!label && <FormLabel className={cn(classNames?.label)}>{label}</FormLabel>}
					<FormControl>
						<div className="relative">
							<Field
								id={id}
								type={isInput ? type : undefined}
								placeholder={placeholder}
								className={cn(
									classNames?.field,
									'peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500',
									icon ? 'pl-10' : ''
								)}
								{...field}
							/>

							{!!icon && (
								<span className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
									{icon}
								</span>
							)}
						</div>
					</FormControl>
					{!!description && <FormDescription className={cn(classNames?.description)}>{description}</FormDescription>}
					{!hiddenMessage && <FormMessage className={cn(classNames?.message)} />}
				</FormItem>
			)}
		/>
	)
}
