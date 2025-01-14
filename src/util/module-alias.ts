import * as path from "path";
import moduleAlias from "module-alias";

const files = path.resolve(__dirname, "../../");

moduleAlias.addAliases({
  "@src": path.resolve(files, "src"),
  "@test": path.resolve(files, "test")
});
