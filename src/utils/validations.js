const extractEmailDomain = (email) => {
    // Trim and validate input
    if (typeof email !== 'string') {
        return {
            isValid: false,
            error: 'Input must be a string'
        };
    }
    const trimmedEmail = email.trim();

    // Regular expression for a more robust email validation
    // This regex broadly covers many valid email formats.
    // For extreme strictness, a more complex regex or dedicated library might be needed.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return {
            isValid: false,
            error: 'Invalid email format'
        };
    }

    const parts = trimmedEmail.split('@');
    const domain = parts[1];

    return {
        isValid: true,
        domain: domain // Now it actually extracts the domain!
    };
};

export {
    extractEmailDomain
};