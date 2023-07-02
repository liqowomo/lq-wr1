import {authMiddleware} from '@clerk/nextjs'

export default authMiddleware()

//TODO : Config for routes

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
