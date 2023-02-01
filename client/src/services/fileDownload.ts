import axios from 'axios';

// filetypes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

/* A download method */
const fileDownload = (redirect: string, fileType: 'pdf' | 'xml' | 'zip', _token?: unknown, fileName?: string) => {
    return axios({
        method: 'GET',
        url: `/Download?file=${redirect}`,
        responseType: 'blob' // important
    }).then(resp => {
        if (resp.status === 200) {
            // a way how to open the file via browser
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nav = window.navigator as any;
            // IE
            if (nav?.msSaveOrOpenBlob) {
                nav.msSaveOrOpenBlob(resp.data, redirect);
            } else {
                const odp = resp.data;
                const uriContent = URL.createObjectURL(
                    new Blob([odp], {
                        type: `application/${fileType}`
                    })
                );
                const link = document.createElement('a');
                link.style.display = 'none';
                link.download = fileName || redirect;
                link.href = uriContent;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    });
};

export default fileDownload;
