export interface Experience {
	id: number
	company: string
	position: string
	duration: string
	description: string
}

export interface Project {
	id: number
	title: string
	description: string
	image: string
	details: string
	link: string | null
	website?: string | null
}

export interface Skill {
	title: string
}
