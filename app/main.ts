import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders
]);

// bootsrap 是ng的浏览器函数，最后一行的作用，就是应用根组件。
// 组件路由器是一个服务。必须要导入appRouterProviders，它包含了我们配置好的路由器，并通过把它加入到自举的数组中让它在应用中可用。
