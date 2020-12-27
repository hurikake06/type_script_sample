export default class Runner {
  run(input :string) :void { throw new Error("Method not implemented."); }
  getAtcoderImput() :string { return require("fs").readFileSync("/dev/stdin", "utf8"); }

  main() :void { this.run(this.getAtcoderImput()) }

  test(input :string) :void {
    console.log("------------");
    console.log("Test Exec.");
    console.log("------------");

    this.run(input);

    console.log("------------");
    console.log("Test Completed.");
    console.log("------------");
  }
}