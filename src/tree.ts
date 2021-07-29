export interface TreeNode {
  children?: Array<this>;
  name: string;
  expand?: boolean;
  path?: string;
}

export interface TextTree extends TreeNode {
  path: string
  title: string
  [k: string]: any
}

export function collect(tree: TextTree, stack = [tree]) {
  const result: Array<TextTree> = []
  while (stack.length) {
    const node = stack.shift()
    node === tree || result.push(node)
    node.children && stack.push(...node.children)
  }

  return result
}
