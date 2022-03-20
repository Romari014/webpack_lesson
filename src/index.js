import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'
import './css/index.css'


console.log("Config key: ", config.key);

const service = new AppService('Hello Warsaw')
service.log()