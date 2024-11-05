const postDateTimeFormat = (
	date: string,
	time: boolean = false,
	timeZone: string = 'Asia/Bangkok',
	local: string = 'TH-th'
) => {
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
}

export default postDateTimeFormat;