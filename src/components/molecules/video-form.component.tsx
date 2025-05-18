'use client'

import { upserIframe } from '@/actions/dashboard/actions'
import { Mdx } from '@/components/ui'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { VideoFormSchema, type VideoFormType } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle2, ExternalLink, Loader2, Play, Radio } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button, Form, Textarea } from '../ui'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { TextField } from './text-field.component'

interface VideoFormProps {
	defaultVideoUrl?: string
	defaultVideoId?: string
}

export const VideoForm = ({ defaultVideoUrl = '', defaultVideoId = '' }: VideoFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [previewUrl, setPreviewUrl] = useState(defaultVideoUrl)
	const [activeTab, setActiveTab] = useState('edit')

	const form = useForm<VideoFormType>({
		resolver: zodResolver(VideoFormSchema),
		defaultValues: {
			imageUrl: defaultVideoUrl,
			title: defaultVideoId
		},
		mode: 'onBlur'
	})

	const { handleSubmit, control, watch, formState } = form
	const currentUrl = watch('imageUrl')
	const { isDirty } = formState

	const handlePreview = () => {
		setPreviewUrl(currentUrl)
		setActiveTab('preview')
	}

	const onSubmit = async (data: VideoFormType) => {
		try {
			setIsSubmitting(true)
			await upserIframe(data)
			setPreviewUrl(data.imageUrl)
			toast.success('Video actualizado correctamente', {
				description: 'La URL del video ha sido actualizada con éxito.',
				icon: <CheckCircle2 className="h-4 w-4 text-green-500" />
			})
			setActiveTab('preview')
		} catch (err) {
			if (err instanceof Error) {
				toast.error('Error al actualizar el video', {
					description: err.message,
					icon: <AlertCircle className="h-4 w-4 text-red-500" />
				})
				return
			}
			toast.error('Error al actualizar el video', {
				description: `${err}`,
				icon: <AlertCircle className="h-4 w-4 text-red-500" />
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	const isValidIframe = (url: string) => {
		return url.includes('<iframe') && url.includes('</iframe>')
	}

	return (
		<Card className="w-full overflow-hidden border-[#2461A9]/20 bg-white shadow-md">
			<CardHeader className="bg-[#2461A9] text-white">
				<div className="flex items-center gap-2">
					<Radio className="h-5 w-5" />
					<CardTitle>Configuración de Video</CardTitle>
				</div>
				<CardDescription className="text-white/80">Actualiza la URL del video para la transmisión en vivo</CardDescription>
			</CardHeader>

			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
				<div className="border-b px-6">
					<TabsList className="h-12 w-full justify-start gap-4 bg-transparent p-0">
						<TabsTrigger
							value="edit"
							className={cn(
								'rounded-none border-b-2 border-transparent px-0 pb-3 pt-2 data-[state=active]:border-[#2461A9] data-[state=active]:bg-transparent data-[state=active]:shadow-none',
								activeTab === 'edit' && 'font-medium text-[#2461A9]'
							)}
						>
							Editar
						</TabsTrigger>
						<TabsTrigger
							value="preview"
							className={cn(
								'rounded-none border-b-2 border-transparent px-0 pb-3 pt-2 data-[state=active]:border-[#2461A9] data-[state=active]:bg-transparent data-[state=active]:shadow-none',
								activeTab === 'preview' && 'font-medium text-[#2461A9]'
							)}
							disabled={!previewUrl}
						>
							Vista previa
						</TabsTrigger>
					</TabsList>
				</div>

				<CardContent className="p-0">
					<TabsContent value="edit" className="mt-0 border-0 p-6">
						<Form {...form}>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<TextField
									classNames={{
										field: 'min-h-[150px] font-mono text-sm',
										label: 'text-base font-medium'
									}}
									id="url"
									as={Textarea}
									label="Código de inserción del video"
									control={control}
									name="imageUrl"
									placeholder='<iframe src="https://player.vimeo.com/video/123456789" width="640" height="360" frameborder="0" allowfullscreen></iframe>'
								/>

								{currentUrl && !isValidIframe(currentUrl) && (
									<Alert variant="destructive" className="text-sm">
										<AlertCircle className="h-4 w-4" />
										<AlertTitle>Formato inválido</AlertTitle>
										<AlertDescription>El código debe ser un iframe válido. Asegúrate de incluir las etiquetas &lt;iframe&gt; y &lt;/iframe&gt;.</AlertDescription>
									</Alert>
								)}

								{/* <TextField
									classNames={{
										label: 'text-base font-medium'
									}}
									id="title"
									label="Título del video"
									control={control}
									name="title"
									placeholder="Conferencia CONTPAQi profit"
								/> */}

								<div className="flex flex-col gap-3 sm:flex-row">
									<Button type="button" variant="outline" className="flex-1 gap-2" onClick={handlePreview} disabled={!currentUrl || !isValidIframe(currentUrl)}>
										<Play className="h-4 w-4" /> Vista previa
									</Button>
									<Button type="submit" className="flex-1 gap-2 bg-[#2461A9] hover:bg-[#2461A9]/90" disabled={isSubmitting || !isDirty || !isValidIframe(currentUrl)}>
										{isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Actualizar video'}
									</Button>
								</div>
							</form>
						</Form>
					</TabsContent>

					<TabsContent value="preview" className="mt-0 border-0">
						<div className="aspect-video w-full bg-black">
							{previewUrl ? (
								<div className="relative h-full w-full">
									<Mdx>{previewUrl.replace(/<iframe/gi, `<iframe className="absolute top-0 left-0 w-full h-full"`)}</Mdx>
								</div>
							) : (
								<div className="flex h-full items-center justify-center">
									<p className="text-white">No hay vista previa disponible</p>
								</div>
							)}
						</div>

						<div className="p-6">
							<Alert className="bg-[#2461A9]/5 text-sm">
								<ExternalLink className="h-4 w-4 text-[#2461A9]" />
								<AlertTitle className="text-[#2461A9]">Vista previa del video</AlertTitle>
								<AlertDescription>
									Esta es una vista previa de cómo se verá el video en la página de transmisión. Puedes volver a editar el código si necesitas hacer cambios.
								</AlertDescription>
							</Alert>
						</div>
					</TabsContent>
				</CardContent>

				<CardFooter className="flex justify-between border-t bg-slate-50 px-6 py-4">
					<p className="text-xs text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>
					<Button variant="ghost" size="sm" className="gap-1 text-xs" onClick={() => setActiveTab(activeTab === 'edit' ? 'preview' : 'edit')}>
						{activeTab === 'edit' ? 'Ver vista previa' : 'Volver a editar'}
					</Button>
				</CardFooter>
			</Tabs>
		</Card>
	)
}
