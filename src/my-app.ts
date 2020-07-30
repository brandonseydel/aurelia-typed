import { customElement } from "aurelia";
@customElement({
  template: html<MyApp>`
  <div>${"message"}</div>
  <div>${(x) => x.getMessage()}</div>
  <div>${"message"}</div>
  <div>${x => x.tester}</div>
  <div>${"tester"}</div>
  <div>${(x) => x.message}</div>`, name: 'my-app'
})
export class MyApp {
  public message = 'Hello World!';

  getMessage() {
    return this.message;
  }

  get tester() {
    return new Date();
  }
}
