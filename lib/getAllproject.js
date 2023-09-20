

export default async function getAllproject() {
    const res = await fetch('http://localhost:3000/api/create-pet')

    if (!res.ok) {
        throw new Error('Page failed to fetch data')
    }

    return res.json()
}