<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="CATALOG">

<table>
	<tbody style="background-color: lightblue; border: 1">
		<tr>
			<th>Title</th>
			<th>Artist</th>
			<th>PRICE</th>
		</tr>
		<xsl:for-each select="//CD">
		<xsl:sort select="PRICE" data-type="number" order="descending"/>
		<tr>
			<td><xsl:value-of select="TITLE"/></td>
			<td><xsl:value-of select="ARTIST"/></td>
			<td><xsl:value-of select="PRICE"/></td>
		</tr>
		</xsl:for-each>
	</tbody>
</table>


</xsl:template>

</xsl:stylesheet>
