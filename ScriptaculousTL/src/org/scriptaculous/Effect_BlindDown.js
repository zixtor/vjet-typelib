/**
 * 
 */
vjo.ftype('org.scriptaculous.Effect_BlindDown') //< public
//> needs(org.scriptaculous.Effect_Scale)
.props({
	/**
	 * 
	 */
	//> public Effect_Scale _invoke_({String | Element} element, Effect_BlindDown.option.one? options)
	_invoke_: function() {return null},
	
	// This is a singluar otype itself
	/**
	 * 
	 */
	//> public
	option: vjo.otype().defs({  // *** NOTE .def vs. def(s) ***
		/**
		 * 
		 */
		//> public
		one: {
			/**
			 * boolean, defaults to false
			 */
			//> public boolean?
			scaleX: null,
			
			/**
			 * boolean, defaults to true
			 */
			//> public boolean?
			scaleY: null,
			
			/**
			 * boolean, defaults to true
			 */
			//> public boolean?
			scaleContent: null,
			
			/**
			 * boolean, defaults to false
			 */
			//> public boolean
			scaleFromCenter: null,
			
			/**
			 * string, defaults to �box', can also be �contents�
			 */
			//> public String?
			scaleMode: null,
			
			/**
			 * integer value, percentage (0%�100%), defaults to 100
			 */
			//> public int?
			scaleFrom: null,
			
			/**
			 * integer value, percentage (0%�100%), defaults to 0
			 */
			//> public int?
			scaleTo: null,
			
			/**
			 * float value, in seconds, defaults to 1.0
			 */
			//> public Number?
			duration: null			
		}
	}).endType()
})
.options({
	metatype: true 
})
.endType();