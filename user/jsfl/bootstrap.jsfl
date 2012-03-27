// ------------------------------------------------------------------------------------------------------------------------
//
//  ██  ██                      ██████              ██          ██
//  ██  ██                      ██  ██              ██          ██
//  ██  ██ █████ █████ ████     ██  ██ █████ █████ █████ █████ █████ ████ █████ █████
//  ██  ██ ██    ██ ██ ██       █████  ██ ██ ██ ██  ██   ██     ██   ██      ██ ██ ██
//  ██  ██ █████ █████ ██       ██  ██ ██ ██ ██ ██  ██   █████  ██   ██   █████ ██ ██
//  ██  ██    ██ ██    ██       ██  ██ ██ ██ ██ ██  ██      ██  ██   ██   ██ ██ ██ ██
//  ██████ █████ █████ ██       ██████ █████ █████  ████ █████  ████ ██   █████ █████
//                                                                              ██
//                                                                              ██
//
// ------------------------------------------------------------------------------------------------------------------------
// User Bootstrap - run user code here

	try
	{
		// load user libraries
			xjsfl.output.log('loading user libraries...', 1);
			xjsfl.classes.load('/jsfl/libraries/*.jsfl'); // A leading / path defaults to the curretn root, in this case /xJSFL/user/
			
		// check that user data is stored (you can remove this if you like)
			xjsfl.file.load('//core/jsfl/install/setup.jsfl');

		// add any user code here
		
			// e.g. register any placeholder paths
			// xjsfl.settings.folders.set('temp', 'c:/temp/')
			
			// etc...

	}
	catch(error)
	{
		xjsfl.output.warn('error running user bootstrap');
		debug(error);
	}