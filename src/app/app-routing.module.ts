import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { TimmerComponent } from './modules/timer/timmer/timmer.component';
import { SettingsComponent } from './modules/user/settings/settings.comoponent';
import { SignupComponent } from './modules/user/signup/signup.component';
import { SigninComponent } from './modules/user/signin/signin.component';
import { ProjectsComponent } from './modules/projects/projects/projects.component';
import { AppLayoutComponent } from './layouts/AppLayout.component';
import { LandingComponent } from './layouts/LandingLayout.component';
import { MainComponent } from './home/main/main.component';

export const appRoutes: Routes =[
{
	path:"",
	component: LandingComponent,
	children:[
	  {
      path:"",
      component: MainComponent
	  },
	  {
		  path:'signup',
		  component: SignupComponent,
	  },
	  {
		  path:'signin',
		  component: SigninComponent,
	  }
	],
},
{
	path:'app',
	component: AppLayoutComponent,
	children:[{
		path:'',
		component: TimmerComponent,
		canActivate:[AuthGuard]
	},
	{
		path:'timer',
		component: TimmerComponent,
		canActivate:[AuthGuard]
	},
	{
		path:'settings',
		component: SettingsComponent,
		canActivate:[AuthGuard]
	},
	{
		path:'signout',
		component: SignupComponent,
		canActivate:[AuthGuard]
	},
	{
		path:'projects',
		component: ProjectsComponent,
		canActivate:[AuthGuard]
	}]
}

]


@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
	providers: [AuthGuard]
	
})

export class AppRoutingModule { }