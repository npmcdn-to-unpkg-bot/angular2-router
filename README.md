# angular2-router
根据官方文档边写边学

AppComponent 变成应用程序的壳，只处理导航。当我们打开这个导航页的时候，有仪表盘和英雄列表两个视图可以选择路由进去（实际上我们通过重定向，使进入该页面，则自动路由到仪表盘的页面）。添加HeroService到providers数组中，因为接下来每一个视图都需要它。其它组件中，则要从providers中移除HeroService。

index.html 中在<head>区的顶部添加<base href="/">语句。该语句不可或缺。

Angular路由器是由多个服务(ROUTER_PROVIDERS)和多个指令(ROUTER_DIRECTIVES)以及一个配置装饰器(RouteConfig)组成的。app.routes.ts是创建的路由配置文件。主要做两件事：
(a) 使用一些路由配置路由器。(b) 提供一个导出，以便把该路由器添加到我们的启动代码。在该文件中使用了路由服务和配置装饰器。对应的在处理导航的app.component文件中使用了路由指令，表明在那个地方使用路由的功能。
并需要在main.ts中添加到bootstrap数组中，让其在应用中生效。

<router-outlet> 路由插座。放路由结果的地方。
templateUrl： '',styleUrls: [''] 这些方式，将html,css文件分离。

 constructor(private heroService: HeroService) { } 比较巧妙的初始实例化方法。这样便可以调用HeroService实例中的所有变量以及函数。主要在ngOnInit函数中初始化需要的数据。

   path: 'detail/:id',路径中的冒号(:)表示:id是一个占位符，当导航到这个HeroDetailComponent组件时，它将被填入一个特定英雄的id。HeroDetailComponent从ActivatedRoute服务的可观察对象params中取得id参数，并通过HeroService服务获取具有这个指定id的英雄数据我们得导入OnInit和OnDestroy接口，因为我们需要在组件的ngOnInit生命周期钩子中调用HeroService并在ngOnDestroy中清理对params的订阅。这个地方涉及一些目前不太明白的部分。

@Input() hero: Hero;表明变量hero来自于其他地方，不是本地变量。

  window.history.back(); 浏览器的历史堆栈，这里我也只知其一。在真实场景中在此需要防范退出应用中。

    let link = ['/detail', hero.id];
    this.router.navigate(link);
    router的方法，在组件内跳转。
