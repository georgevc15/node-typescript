import * as express from 'express'

class App {
	public express

	constructor () {
		this.express = express()
		this.mountRoutes()
	} 


	private mountRoutes (): void {
		const router = express.Router()
		router.get('/', (req, res) => {
			res.json({
				message: 'Index page'
			})
		})

		router.get('/test', (req, res) => {
			res.json({
				message: 'Test  page'
			})
		})


		this.express.use('/', router)
	}
}


export default new App().express