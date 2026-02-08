export const sendData = async (value) => {
  try {
    const res = await fetch("http://localhost:9000/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value })
    });

    if (res.status === 429) {
      return { error: "Rate limit exceeded" };
    }

    return { success: true };
  } catch (err) {
    return { error: "Backend not reachable" };
  }
};
