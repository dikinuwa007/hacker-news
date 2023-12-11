function formatIdn (value){
const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta', // GMT+7 (Waktu Indonesia Barat)
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // Untuk format 12-jam dengan AM/PM
    });

// Memformat waktu dalam zona waktu GMT+7
    const timeString = formatter.format(value);

    return value.toLocaleDateString("us-US", options)+' '+timeString;
}
const formatDate = (value) =>{
    console.log(value,'<<<<VA');
      const date = value;
      console.log(date,'<<<<<');
      const yyyy = date.getFullYear();
      const mm = date.getMonth() + 1; // Months start at 0!
      const dd = date.getDate();

          return [ yyyy, mm < 10 ? `0${mm}` : mm, dd < 10 ? `0${dd}` : dd ].join('-')
}
module.exports = {formatIdn,formatDate}