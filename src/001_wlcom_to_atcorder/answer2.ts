export default class Answer {
	getAtcoderImput(): string { return require("fs").readFileSync("/dev/stdin", "utf8"); }
	main(): void { this.run(this.getAtcoderImput()) }

  run(input_org: string): void {
		// 1行目がinput[0], 2行目がinput[1], …に入る
		let input: string[] = input_org.split("\n");
		let tmp: string[] = input[1].split(" ");

		//文字列から10進数に変換するときはparseIntを使います
		var a: number = parseInt(input[0], 10);
		var b: number = parseInt(tmp[0], 10);
		var c: number = parseInt(tmp[1], 10);
		var s: string = input[2];

		//出力
		console.log('%d %s',a+b+c,s);
	}
}

(new Answer).main()