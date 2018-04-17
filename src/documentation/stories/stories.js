/**
 *
 * @api {get} /api/stories List All Stories
 * @apiVersion 1.0.0
 *
 * @apiDescription List all stories in crm.
 * 
 * @apiName List All Stories
 * @apiGroup Stories
 * 
 * @apiParam {Number} limit must be a value greater or equal to 1 otherwise no pagination is applied
 * @apiParam {Number} page must be a value greater or equal to 1 otherwise no pagination is applied
 *
 * @apiParamExample query example:
 * https://mam-restful-api.herokuapp.com/api/stories
 * https://mam-restful-api.herokuapp.com/api/stories?page=1&limit=10
 *
 * @apiUse HeadersRequired
 * @apiUse SuccessGetAllStories
 * @apiUse CommonError
 * @apiUse UnauthorizeError
 */

/**
 *
 * @api {get} /api/stories/outstanding List Outstanding Stories
 * @apiVersion 1.0.0
 *
 * @apiDescription List all outstanding stories in crm.
 * 
 * @apiName List Outstanding Stories
 * @apiGroup Stories
 * 
 * @apiParam {Number} limit must be a value greater or equal to 1 otherwise no pagination is applied
 * @apiParam {Number} page must be a value greater or equal to 1 otherwise no pagination is applied
 *
 * @apiParamExample query example:
 * https://mam-restful-api.herokuapp.com/api/stories/outstanding
 * https://mam-restful-api.herokuapp.com/api/stories/outstanding?page=1&limit=10
 *
 * @apiUse HeadersRequired
 * @apiUse SuccessGetOutstandingStories
 * @apiUse CommonError
 * @apiUse UnauthorizeError
 */



/**
 *
 * @api {get} /api/stories/portfolio List Portfolio Stories
 * @apiVersion 1.0.0
 *
 * @apiDescription List all portfolio stories in crm.
 * 
 * @apiName List Portfolio Stories
 * @apiGroup Stories
 * 
 * @apiParam {Number} limit must be a value greater or equal to 1 otherwise no pagination is applied
 * @apiParam {Number} page must be a value greater or equal to 1 otherwise no pagination is applied
 *
 * @apiParamExample query example:
 * https://mam-restful-api.herokuapp.com/api/stories/portfolio
 * https://mam-restful-api.herokuapp.com/api/stories/portfolio?page=1&limit=10
 *
 * @apiUse HeadersRequired
 * @apiUse SuccessGetPortfolioStories
 * @apiUse CommonError
 * @apiUse UnauthorizeError
 */



/**
 *
 * @api {get} /api/stories/detail Single Story
 * @apiVersion 1.0.0
 *
 * @apiDescription Single story from crm.
 * 
 * @apiName Single Story
 * @apiGroup Stories
 * 
 * @apiParam {Number} slug Slug Identifier of the post
 *
 * @apiParamExample query example:
 * https://mam-restful-api.herokuapp.com/api/stories/portfolio?slug=majo-y-ale
 *
 * @apiUse HeadersRequired
 * @apiUse SuccessGetSingleStory
 * @apiUse CommonError
 * @apiUse UnauthorizeError
 */