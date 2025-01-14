import moment from "moment";
import { App } from "./app";

export class Server {
	public static run() {
		const application = new App();
		const isTestAmbient = process.env.NODE_ENV === "test";
		const port = Number(process.env.PORT);
		if (!isTestAmbient) {
			application.run().then(() => {
				application.express.listen(port, () => {
					console.log(`Server is running in url: http://localhost:${port}. Started of ${moment().utc().toDate()}`);
				});
			});
		}
	}
}
