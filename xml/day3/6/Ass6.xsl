<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="CATALOG">

<table>
	<tbody style="background-color: lightblue; border: 1">
		<tr>
			<th>Title</th>
			<th>Artist</th>
		</tr>
		<xsl:for-each select="//CD">
			<xsl:variable name="priceColor">
				<xsl:choose>
					<xsl:when test="PRICE &gt; 10">
						'red'
					</xsl:when>
					<xsl:otherwise>
						'green'
					</xsl:otherwise>
				</xsl:choose>
			</xsl:variable>
			
			<tr style="background-color:{$priceColor}">
				<td><xsl:value-of select="TITLE"/></td>
				<td><xsl:value-of select="ARTIST"/></td>
			</tr>
		</xsl:for-each>
	</tbody>
</table>


</xsl:template>

</xsl:stylesheet> 