// 联合类型

function padLeft(vlaue: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(' ') + vlaue
    }
    if (typeof padding === "string") {
        return padding + vlaue
    }
}

padLeft('Hello', '46')
padLeft('aas', 46)