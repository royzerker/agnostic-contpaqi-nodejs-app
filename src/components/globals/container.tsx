import React from 'react'

interface ContainerProps {
	children: React.ReactNode
	className?: string
}
export const Container = ({ children }: ContainerProps) => {
	return <div className="container">{children}</div>
}
