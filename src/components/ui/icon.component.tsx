import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import React from 'react'

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports
}

const _Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name])

	return <LucideIcon {...props} />
}

const Icon = React.memo(_Icon)

export { Icon }
