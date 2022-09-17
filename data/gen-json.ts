type Orientation = 'U' | 'R' | 'Tu' | 'Tr'
type Range = [number] | [number, number];

const parseIntOrRange = (s: string): Range => {
    if (s.includes('..')) {
        const [start, end] = s.split('..')
        return [parseInt(start, 16), parseInt(end, 16)]
    } else {
        return [parseInt(s, 16)]
    }
}

const text: string = Deno.readTextFileSync("data/VerticalOrientation.txt");
const uTu: Range[] = text.split("\n")
    .filter(l => !(l.startsWith('#') && l === ""))
    .flatMap(l => {
        // All lines are in the format:
        // number-or-range ; orientation # comment
        const [n, o] =
            l.split('#', 1)[0].split(";").map(s => s.trim());
        if (o === 'U' || o === 'Tu') {
            return [parseIntOrRange(n)]
        } else {
            return []
        }
    })

console.log(uTu.length)
Deno.writeFileSync("data/VerticalOrientation.json", new TextEncoder().encode(JSON.stringify(uTu)))
