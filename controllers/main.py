from odoo import http
import random
import logging
_logger = logging.getLogger(__name__)

class MainClass(http.Controller):


    @http.route('/jobs/', auth="public", type="json", methods=['POST'])
    def all_cities(self):
        records = http.request.env['hr.job'].search([])
        _logger.info("############ recordes:%s",records)
        val = []
        for  record in records:
            _logger.info("#################Ran:%s",random.choice(records))
            rand = random.choice(records)
            val.append(rand.id)
            # if len(val) == 4:
        #     pass
        #     # cities = http.request.env['hr.job'].search_read([('id','in',val)], ['name', 'department_id', 'address_id','no_of_recruitment'])
        #     # return cities
        # else:
        #     for  record in records:
        #         _logger.info("#################Ran:%s",random.choice(records))
        #         rand = random.choice(records)
        #         if rand.id in val:
        #             _logger.info("PPPPPPPPPased")
        #             pass
        #         else:
        #             _logger.info("NNNNNNNNNNopppp")

        #             val.append(rand.id)
            # return random.choice(records)
        # return False
            # return random.choice(records)
        # return False
        _logger.info("#######Apppppp:%s",val)

        cities = http.request.env['hr.job'].search_read([('id','in',val)], ['name', 'department_id', 'address_id','no_of_recruitment'],limit=4)
        return cities
