const postDateTimeFormat = (
	date: string,
	time: boolean = false,
	timeZone: string = 'Asia/Bangkok',
	local: string = 'TH-th'
) => {
	try {
		const options: Intl.DateTimeFormatOptions = {
			month: "short",
			day: "numeric",
			year: "numeric",
			...(time && {
				minute: "2-digit",
				hour: "2-digit",
			}),
			timeZone
		};
		const day = new Date(date)
			.toLocaleDateString(local, options)
			.toLocaleLowerCase();
		return day;
	} catch (error: any) {
		if (error.message) {
			console.log(error.message);
		} else {
			console.log(error);
		}
		return date;
	}
}

export default postDateTimeFormat;