export const GenResObj = (...payloads) => {
    return {
        code: payloads[0],
        data: {
            success: payloads[1],
            message: payloads[2],
            data: payloads[3] || null,
        }
    }
}