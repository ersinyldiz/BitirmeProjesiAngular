import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SafeHtmlPipe } from "./safe-html.pipe";
import { SafeUrlPipe } from "./safe-url-pipe.pipe";
import { SafeUrl } from "./safe-url.pipe";


@NgModule({
  declarations:[SafeHtmlPipe,SafeUrlPipe,SafeUrl],
  imports:[CommonModule],
  exports:[SafeHtmlPipe,SafeUrlPipe,SafeUrl]
})

export class MainPipe{}
