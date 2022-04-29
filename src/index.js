import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'


console.log("Config key: ", config.key);

const service = new AppService('Hello Warsaw')
service.log()