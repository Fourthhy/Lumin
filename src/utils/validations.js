const validateEmailDomain = (email) => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return {
            isValid: false,
            error: 'Invalid email format'
        };
    }

    const parts = trimmedEmail.split('@');
    const domain = parts[1];

    // Convert domain to lowercase for case-insensitive comparison
    const lowercasedDomain = domain.toLowerCase();

    // Define the allowed top-level domains (TLDs)
    const allowedTLDs = ['.com', '.net'];

    // Check if the domain ends with any of the allowed TLDs
    const isAllowedDomain = allowedTLDs.some(tld => lowercasedDomain.endsWith(tld));

    if (!isAllowedDomain) {
        return {
            isValid: false,
            error: 'Email domain not allowed. Only .com and .net are accepted.'
        };
    }

    return {
        isValid: true,
        domain: domain // Returns the original case domain
    };
};

export {
    validateEmailDomain
};