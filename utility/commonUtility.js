class APIFeatures {
    constructor(model, queryObj) {
        this.model = model;
        this.queryObj = queryObj;
        this.query = null;
    }
    filter() {
        var {sort, fields, page, limit, ...resQueries } = this.queryObj

        //filtering
        var queryStr = JSON.stringify(resQueries);
        var modifiedQuery = queryStr.replace(/\b(gt|lt|gte|lte|in)\b/g, (match) => {
            return `$${match}`
        });
        var queryObj = JSON.parse(modifiedQuery)
        this.query = this.model.find(queryObj)
        return this;
    }
    sort() {
        var {sort} = this.queryObj;
        if(sort) {
            sort = sort.split(",").join("  ")
            this.query = this.query.sort(sort);
        } else {
        this.query = this.query.sort("createdAt");
        }
        return this;
    }
    fieldLimitation() {
        var {fields} = this.queryObj
        if (fields) {
            fields = fields.split(",").join("  ")
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select("-__v")
        }
        return this;
    }
    pagination() {
        var {page, limit} = this.queryObj
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 2;
        var skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
    get() {
        return this.query;
    }
}

module.exports = APIFeatures;