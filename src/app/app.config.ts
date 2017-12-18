import { environment } from '../environments/environment';
export class AppConfig {
    // Setup base url
    static BASE_URL = environment.baseUrl;
    static API_VERSIONING = 'api/v1';

    // request methods
    static GET= 'get';
    static PUT = 'put';
    static POST = 'post';
    static DELETE = 'delete';

    // all common titles
    static MAINTENANCE_TITLE = 'Bettinger Maintenance Break';
    static NOTFOUND_TITLE = 'Notfound';

    // All common internal routes - bettinger
    static MAINTENANCE = 'maintenance';
    static NOTFOUND = 'notfound';
}
