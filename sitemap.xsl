<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/sitemap">
        <html>
            <head>
                <title>Sitemap for dbd.chegge.se</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        background-color: #f4f4f4;
                        color: #333;
                    }
                    h1 {
                        color: #2c3e50;
                    }
                    ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    li {
                        margin: 5px 0;
                        padding: 5px;
                        background-color: #ecf0f1;
                        border-radius: 5px;
                    }
                    li a {
                        text-decoration: none;
                        color: #2980b9;
                    }
                    li a:hover {
                        color: #3498db;
                    }
                </style>
            </head>
            <body>
                <h1>Sitemap for dbd.chegge.se</h1>
                <ul>
                    <xsl:for-each select="url">
                        <li>
                            <a href="{loc}"><xsl:value-of select="loc"/></a>
                            <p><strong>Last Modified:</strong> <xsl:value-of select="lastmod"/></p>
                            <p><strong>Change Frequency:</strong> <xsl:value-of select="changefreq"/></p>
                            <p><strong>Priority:</strong> <xsl:value-of select="priority"/></p>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
