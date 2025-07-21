import fs from "fs"
import path from "path"

const name = process.argv[2]
const type = process.argv[3] || "atom"

if (!name) {
  console.error("Fatal error. Invalid name of this component")
  process.exit(1)
}

if (type !== "atom" && type !== "block") {
  console.error("Fatal error. Invalid type. It should be either atom or block")
  process.exit(1)
}

const getSentenceCaseName = () => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

const componentDir = path.join("src", "app", type + "s", name)
const componentFile = path.join(componentDir, `${name}.tsx`)
const testFile = path.join(componentDir, `${name}.test.tsx`)
const storybookFile = path.join(componentDir, `${name}.stories.tsx`)
const typesFile = path.join(componentDir, "types.ts")

const componentContent = `import { ${getSentenceCaseName()}Props } from "./types"\n\nexport function ${getSentenceCaseName()}({}: ${getSentenceCaseName()}Props) {\n  return <></>\n}`
const testContent = `import { render } from "@testing-library/react" \nimport { ${getSentenceCaseName()} } from "./${name}" \n\ndescribe("${getSentenceCaseName()} component", () => { \n  it("renders component", () => { \n    render(<${getSentenceCaseName()} /> )\n  }) \n})`
const storybookContent = `import { Meta, StoryObj } from "@storybook/nextjs"\nimport { ${getSentenceCaseName()} } from "./${name}"\n\nconst meta: Meta<typeof ${getSentenceCaseName()}> = { title: "${type}s/${getSentenceCaseName()}", component: ${getSentenceCaseName()} }\nexport default meta\ntype Story = StoryObj<typeof ${getSentenceCaseName()}>\n\nexport const Default: Story = { args: {} }`
const typesContent = `export type ${getSentenceCaseName()}Props = {\n  children?: React.ReactNode\n}`

fs.mkdirSync(componentDir, { recursive: true })
fs.mkdirSync(componentDir + "/ui", { recursive: true })
fs.mkdirSync(componentDir + "/hooks", { recursive: true })
fs.mkdirSync(componentDir + "/utils", { recursive: true })
fs.writeFileSync(componentFile, componentContent)
// fs.writeFileSync(testFile, testContent)
// fs.writeFileSync(storybookFile, storybookContent)
fs.writeFileSync(typesFile, typesContent)
console.log("Component created successfully in ", componentDir)
