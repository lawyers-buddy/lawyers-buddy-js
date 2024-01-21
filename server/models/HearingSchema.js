class Hearing {
    constructor(hearing_id, lawyer_id, case_id, client_id, upload_attachment, next_hearing, hearing_details) {
      this.hearing_id = hearing_id;
      this.lawyer_id = lawyer_id;
      this.case_id = case_id;
      this.client_id = client_id;
      this.upload_attachment = upload_attachment;
      this.next_hearing = next_hearing;
      this.hearing_details = hearing_details;
    }
  }
  
  module.exports = Hearing;
  