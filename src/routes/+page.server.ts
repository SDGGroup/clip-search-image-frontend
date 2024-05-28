interface Items {
    items: string[];
}
interface Probs {
    probs: number[];
}
export async function load({ fetch }) {
    const res = await fetch("/api/items");
    const items: Items = await res.json();
    return items;
}

export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();
        const query = data.get("query");
        const res = await fetch(`/api/search/${query}`);
        const probs: Probs = await res.json();
        return probs;
    },
};
