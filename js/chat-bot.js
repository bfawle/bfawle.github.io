function chatBot() {

	// current user input
	this.input;

	/**
	 * respondTo
	 *
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 *
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {

		this.input = input.toLowerCase();

		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "Hi welcome to Cognitve chatbot... how can I help?";

		if(this.match('onboard') || this.match('sup') || this.match('watson explorer'))
			return "ok , would you like to use the Community edition or the enterprise edition?";

       if(this.match('Community')|| this.match('sup') || this.match('watson explorer'))
			return "Community Edition can be accessed at the following url https://www.ibm.com/us-en/marketplace/content-analytics.. Do you require any further assistance today";

      if(this.match('NO') || this.match('I am fine'))
			return "Ok have a nice day talk soon Goodbye: )";

		if(this.match('enterprise') || this.match('wex'))

			return "Ok you will need to go to Engage US https://engageus.w3ibm.mybluemix.net/requestsList/59958dda94f6b3380018ec2e8c40f9e8 and a member of our team will be in contact shortly. Do you require any further asistance today ?";

		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "this github thing is pretty cool, huh?";

		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";

		if(this.match('^no+(\\s|!|\\.|$)'))
			return "Ok have a nice day talk soon Goodbye : )";

		if(this.match('^yes+(\\s|!|\\.|$)'))
			return "Ok how else can I assist you?: )";

		if(this.match('(cya|bye|goodbye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "good teamwork!"];

		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];

		if(this.input == 'noop')
			return;

		return input + " what?";
	}

	/**
	 * match
	 *
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}
