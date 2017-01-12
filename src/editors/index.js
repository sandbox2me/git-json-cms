import AssetEditor from "./assetEditor"
import EnumEditor from "./enumEditor"
import MarkdownEditor from "./markdownEditor"
import NumberEditor from "./numberEditor"
import StringEditor from "./stringEditor"

export default {
  enum: EnumEditor,
  image: AssetEditor,
  markdown: MarkdownEditor,
  number: NumberEditor,
  string: StringEditor,
  video: AssetEditor
}
