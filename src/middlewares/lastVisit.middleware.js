export const setLastVisit = (req, res, next) => {

    if (req.cookies.lastVisit) {
        res.locals.lastVisit = new Date(
            req.cookies.lastVisit
        ).toLocaleString();
    }
    res.cookie(
        'lastVisit',
        new Date().toISOString()
    );
    next();
}