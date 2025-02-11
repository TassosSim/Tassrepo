<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:xs="http://www.w3.org/2001/XMLSchema" 
                version="2.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8" />

    <!-- Root template for the sitemap -->
    <xsl:template match="/urlset">
        <html>
            <head>
                <title>Sitemap for dbd.chegge.se</title>
                <style>
                    /* Modern Dark Mode Styles */
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 20px;
                        background-color: #1e1e1e;
                        color: #dcdcdc;
                    }

                    h1 {
                        color: #f39c12;
                        text-align: center;
                        font-size: 2.5em;
                        margin-bottom: 20px;
                    }

                    ul {
                        list-style-type: none;
                        padding: 0;
                        max-width: 900px;
                        margin: 0 auto;
                    }

                    li {
                        background-color: #2c3e50;
                        margin: 10px 0;
                        padding: 15px;
                        border-radius: 10px;
                        color: #ecf0f1;
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
                        color: #95a5a6;
                    }

                    p strong {
                        color: #ecf0f1;
                    }
                </style>
            </head>
            <body>
                <h1>Sitemap for dbd.chegge.se</h1>
                <ul>
                    <xsl:apply-templates select="url"/>
                </ul>
            </body>
        </html>
    </xsl:template>

    <!-- Template for each URL -->
    <xsl:template match="url">
        <li>
            <a href="{loc}"><xsl:value-of select="loc"/></a>
            <p><strong>Last Modified:</strong> <xsl:value-of select="lastmod"/></p>
            <p><strong>Change Frequency:</strong> <xsl:value-of select="changefreq"/></p>
            <p><strong>Priority:</strong> <xsl:value-of select="priority"/></p>
        </li>
    </xsl:template>

</xsl:stylesheet>