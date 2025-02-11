<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap for dbd.chegge.se</title>
                <style>
                    /* Dark Mode Styles */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #121212;
                        color: #e0e0e0;
                        margin: 20px;
                    }

                    h1 {
                        color: #f39c12;
                        font-size: 2.5em;
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;
                        max-width: 800px;
                        margin: 0 auto;
                    }

                    li {
                        background-color: #2c3e50;
                        margin: 10px 0;
                        padding: 15px;
                        border-radius: 8px;
                    }

                    li a {
                        text-decoration: none;
                        color: #3498db;
                        font-weight: bold;
                    }

                    li a:hover {
                        color: #1abc9c;
                    }

                    li p {
                        font-size: 0.9em;
                        color: #bdc3c7;
                    }

                    p strong {
                        color: #ecf0f1;
                    }
                </style>
            </head>
            <body>
                            <style>
                    /* Dark Mode Styles */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #121212;
                        color: #e0e0e0;
                        margin: 20px;
                    }

                    h1 {
                        color: #f39c12;
                        font-size: 2.5em;
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;
                        max-width: 800px;
                        margin: 0 auto;
                    }

                    li {
                        background-color: #2c3e50;
                        margin: 10px 0;
                        padding: 15px;
                        border-radius: 8px;
                    }

                    li a {
                        text-decoration: none;
                        color: #3498db;
                        font-weight: bold;
                    }

                    li a:hover {
                        color: #1abc9c;
                    }

                    li p {
                        font-size: 0.9em;
                        color: #bdc3c7;
                    }

                    p strong {
                        color: #ecf0f1;
                    }
                </style>
                <h1>Sitemap for dbd.chegge.se</h1>
                <ul>
                    <xsl:apply-templates select="url"/>
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="url">
        <li>
            <a href="{loc}"><xsl:value-of select="loc"/></a>
            <p><strong>Last Modified:</strong> <xsl:value-of select="lastmod"/></p>
            <p><strong>Change Frequency:</strong> <xsl:value-of select="changefreq"/></p>
            <p><strong>Priority:</strong> <xsl:value-of select="priority"/></p>
        </li>
    </xsl:template>

</xsl:stylesheet>
