/**
 *
 * @api {get} /api/questions List Questions
 * @apiVersion 1.0.0
 *
 * @apiDescription List all questions in crm.
 * 
 * @apiName List Questions
 * @apiGroup Questions
 *
 * @apiParamExample query example:
 * https://mam-restful-api.herokuapp.com/api/questions
 *
 * @apiUse HeadersRequired
 * @apiUse SuccessGetQuestions
 * @apiUse CommonError
 * @apiUse UnauthorizeError
 */