import {config} from './modules/config'
import AppService from './modules/app.service'

console.log("Config key: ", config.key);

const service = new AppService('Hello Warsaw')
service.log()