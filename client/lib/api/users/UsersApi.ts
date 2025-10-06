// lib/api/userApi.ts
export async function registerUser(userData: Record<string, any>) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Registration`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
            credentials: "include", // if backend uses cookies or sessions
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Registration failed");
        return data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
}
