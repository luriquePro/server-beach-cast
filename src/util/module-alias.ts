import moduleAlias from "module-alias";
import { join, resolve } from "path";

const files = resolve(__dirname, "../../");

moduleAlias.addAliases({
	"@src": join(files, "src"),
	"@test": join(files, "test"),
});
