type log = "show-log" | "hide-log"

export const showPretty = (obj: object, log: log): string => {
    const result = JSON.stringify(obj, null, 2)
    log == "show-log" && console.log(result)
    return JSON.stringify(result)
}