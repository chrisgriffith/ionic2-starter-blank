import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/**
 * This is a custom Angular error handler. By default, we report
 * errors to the IonicDevServer if running, but you can add
 * other 3rd party error handling services here.
 */
class MyErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    IonicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ]
})
export class AppModule {}
