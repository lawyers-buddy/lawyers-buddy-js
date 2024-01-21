class Case {
    constructor(case_id, lawyer_id, client_id, case_title, case_description, start_date, first_hearing, judge_name, opponent_party_name, opponent_party_lawyer_name, cnr_number, court_name, case_closed) {
      this.case_id = case_id;
      this.lawyer_id = lawyer_id;
      this.client_id = client_id;
      this.case_title = case_title;
      this.case_description = case_description;
      this.start_date = start_date;
      this.first_hearing = first_hearing;
      this.judge_name = judge_name;
      this.opponent_party_name = opponent_party_name;
      this.opponent_party_lawyer_name = opponent_party_lawyer_name;
      this.cnr_number = cnr_number;
      this.court_name = court_name;
      this.case_closed = case_closed;
    }
  }
  
  module.exports = Case;
  